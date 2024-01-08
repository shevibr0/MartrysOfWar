using AutoMapper;
using DL;
using DL.Models;
using DL.Services;
using Entities;
using Entities.DTO;
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

        public async Task<List<SoldierDTO>> FetchDataFromApiAsync()
        {
            string apiUrl = "https://iron-swords-api.davar1.co.il/api/person";

            try
            {
                HttpResponseMessage response = await _httpClient.GetAsync(apiUrl);

                if (response.IsSuccessStatusCode)
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();


                    // Adjust the namespace of apiResponseModel accordingly
                    var data = JsonSerializer.Deserialize<apiResponseModel>(apiResponse);
                    List<SoldierDTO> resualt = data.results;
                    List<Soldier> soldiersList = _mapper.Map<List<Soldier>>(data.results);

                    // Call SaveDataAsync with the list of soldiers
                    List<Soldier> a = await _dataAccessLayer.FetchDataFromApiAsync(soldiersList);

                    return _mapper.Map<List<SoldierDTO>>(a);
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


       
    }
}
