using AutoMapper;
using DL;
using DL.Models;
using DL.Services;
using Entities;
using Entities.DTO;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace BL.Services
{
    public class ApiServiceBL : IApiServiceBL
    {
        private readonly HttpClient _httpClient;
        private readonly IApiServiceDL _dataAccessLayer;
        private IMapper _mapper;

        public ApiServiceBL(HttpClient httpClient, IApiServiceDL dataAccessLayer, IMapper mapper)
        {
            _httpClient = httpClient;
            _mapper = mapper;
            _dataAccessLayer = dataAccessLayer;
        }

        public async Task<string> CreateUrlTheilimFromApiAsync(TehilimUrlDTO tehilim)
        {
            string apiUrl = "https://new.tehilimyahad.com/mcall?_ROUTINE=THLREAD&_NS=INT&_LABEL=NEWREAD2";

            try
            {
                // Serialize the request body object to JSON
                string jsonBody = JsonConvert.SerializeObject(tehilim);

                // Create the HttpContent for the request body
                HttpContent httpContent = new StringContent(jsonBody, System.Text.Encoding.UTF8, "application/json");

                HttpResponseMessage response = await _httpClient.PostAsync(apiUrl,httpContent);

                if (response.IsSuccessStatusCode)
                {
                    // Read the response content
                    string responseContent = await response.Content.ReadAsStringAsync();
                    var data = System.Text.Json.JsonSerializer.Deserialize<apiTheilimResponseModel>(responseContent);
                    //List<SoldierDTO> resualt = data.results;
                    //List<Soldier> soldiersList = _mapper.Map<List<Soldier>>(data.results);

                    //// Call SaveDataAsync with the list of soldiers
                    //string resultData = await _dataAccessLayer.FetchDataFromApiAsync(soldiersList);
                    return data.ReadLink;
                }
                else
                {
                    Console.WriteLine($"Error: {response.StatusCode} - {response.ReasonPhrase}");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception: {ex.Message}");
            }

            return null;
        }

        public async Task<string> FetchDataFromApiAsync()
        {
            string apiUrl = "https://iron-swords-api.davar1.co.il/api/person?page=1";

            try
            {
                do
                {
                    HttpResponseMessage response = await _httpClient.GetAsync(apiUrl);

                    if (response.IsSuccessStatusCode)
                    {
                        string apiResponse = await response.Content.ReadAsStringAsync();
                        // Adjust the namespace of apiResponseModel accordingly
                        var data = System.Text.Json.JsonSerializer.Deserialize<apiResponseModel>(apiResponse);
                        List<SoldierDTO> resualt = data.results;
                        List<Soldier> soldiersList = _mapper.Map<List<Soldier>>(data.results);

                        // Call SaveDataAsync with the list of soldiers
                        string resultData = await _dataAccessLayer.FetchDataFromApiAsync(soldiersList);
                        apiUrl = data.next;
                    }
                    else
                    {
                        Console.WriteLine($"Error: {response.StatusCode} - {response.ReasonPhrase}");
                    }
                } while (apiUrl != null);
                //return _mapper.Map<List<SoldierDTO>>(a);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception: {ex.Message}");
            }

            return null;
        }


       
    }
}
