using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;
using ResisterColorCodes.Models;

namespace ResisterColorCodes.Controllers
{
    public class HomeController : ApiController, IOhmValueCalculator
    {
       
        // GET api/values
        [System.Web.Http.HttpGet]
        public IEnumerable<string> Get(string test, string test2)
        {
            return new string[] { "value1", "value2" };
        }
        [System.Web.Http.HttpGet]
        public int CalculateOhmValue(string bandAColor, string bandBColor, string bandCColor, string bandDColor)
        {
            return (Convert.ToInt32(bandAColor) * 10 + Convert.ToInt32(bandAColor)) * Convert.ToInt32(bandCColor);
        }
    }
}
