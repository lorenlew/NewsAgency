using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(NewsAgencyRest.Startup))]

namespace NewsAgencyRest
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
