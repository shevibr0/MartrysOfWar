﻿using System;
using System.Collections.Generic;

namespace DL.Models
{
    public partial class Soldier
    {
        public Soldier()
        {
            Memories = new HashSet<Memory>();
            Pictures = new HashSet<Picture>();
            Recipies = new HashSet<Recipy>();
            Tehilims = new HashSet<Tehilim>();
            VolunteeringOptions = new HashSet<VolunteeringOption>();
        }

        public int id { get; set; }
        public string? first_name { get; set; }
        public string? last_name { get; set; }
        public int? age { get; set; }
        public string? gender { get; set; }
        public string? city { get; set; }
        public DateTime? date_of_death { get; set; }
        public string? hebrew_date { get; set; }
        public string? place_of_death { get; set; }
        public string? rank_name { get; set; }
        public string? rank_organization { get; set; }
        public string? role { get; set; }
        public string? short_description { get; set; }
        public string? long_description { get; set; }
        public string? image { get; set; }
        public string? url_to_article { get; set; }
        public string? classification { get; set; }
        public string? place_of_service { get; set; }
        public string? burial_place { get; set; }
        public bool? is_approved { get; set; }
        public bool? is_child { get; set; }
        public bool? is_emergency_squad { get; set; }
        public bool? at_nova { get; set; }
        public virtual ICollection<Memory> Memories { get; set; }
        public virtual ICollection<Picture> Pictures { get; set; }
        public virtual ICollection<Recipy> Recipies { get; set; }
        public virtual ICollection<Tehilim> Tehilims { get; set; }
        public virtual ICollection<VolunteeringOption> VolunteeringOptions { get; set; }
    }
}