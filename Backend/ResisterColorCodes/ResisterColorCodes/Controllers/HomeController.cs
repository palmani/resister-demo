using System;
using System.Collections.Generic;
using System.Globalization;
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
        public decimal CalculateOhmValue(string bandAColor, string bandBColor, string bandCColor, string bandDColor)
        {
            decimal mulitplier = decimal.Parse(bandCColor, CultureInfo.InvariantCulture);
            decimal result =  (decimal) (Convert.ToInt32(bandAColor) * 10 + Convert.ToInt32(bandBColor)) * mulitplier;
            return result;
        }
    }
}
