using System.IO;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace NewsAgencyRest.Controllers
{
    public class NewsController : ApiController
    {
        private const string VirtualPath = "/Content/TestData/news.json";
        private readonly string _physicalPath = System.Web.Hosting.HostingEnvironment.MapPath(VirtualPath);

        // GET api/news
        public JsonResult Get()
        {

            var news = File.ReadAllText(_physicalPath);
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
        public void Post([FromBody]dynamic data)
        {
            var newsStore = data.ToString();
            File.WriteAllText(_physicalPath, newsStore);
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
