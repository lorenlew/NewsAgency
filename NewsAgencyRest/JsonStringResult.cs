﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NewsAgencyRest
{
    public class JsonStringResult : ContentResult
    {
        public JsonStringResult (string json)
        {
            Content = json;
            ContentType = "application/json";
        }
    }
}