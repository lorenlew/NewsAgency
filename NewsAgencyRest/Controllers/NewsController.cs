using System.IO;
using System.Web.Http;
using System.Web.Mvc;

namespace NewsAgencyRest.Controllers
{
    public class NewsController : ApiController
    {
        // GET api/news
        public JsonResult Get()
        {
            const string virtualPath = "/Content/TestData/news.json";
            string physicalPath = System.Web.Hosting.HostingEnvironment.MapPath(virtualPath);
            var news = File.ReadAllText(physicalPath);
            var json = new JsonResult()
            {
                Data = news,
                JsonRequestBehavior =  JsonRequestBehavior.AllowGet
            };

            return json;
        }

        // GET api/news/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/news
        public void Post([FromBody]string value)
        {
        }

        // PUT api/news/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/news/5
        public void Delete(int id)
        {
        }
    }
}
