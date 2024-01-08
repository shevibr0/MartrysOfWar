
using AutoMapper;
using DL.Models;
using Entities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Entities
{
    public class AutoMapping: Profile
    {
        public AutoMapping()
        {
            CreateMap<UserDTO, User>().ReverseMap();
            CreateMap<MemoryDTO, Memory>().ReverseMap();
            CreateMap<PictureDTO, Picture>().ReverseMap();
            CreateMap<SoldierDTO, Soldier>().ReverseMap();
            CreateMap<RecipyDTO, Recipy>().ReverseMap();
            CreateMap<TehilimDTO, Tehilim>().ReverseMap();
            CreateMap<PreparationDTO, Preparation>().ReverseMap();
            CreateMap<PersonalVolunteeringDTO, PersonalVolunteering>().ReverseMap();
            CreateMap<VolunteeringDTO, Volunteering>().ReverseMap();
            CreateMap<VolunteeringOptionDTO, VolunteeringOption>().ReverseMap();
            CreateMap<ProductsToRecipeDTO, ProductsToRecipe>().ReverseMap();
            CreateMap<apiResponseModel, SoldierDTO>().ReverseMap();

        }
    }
}
