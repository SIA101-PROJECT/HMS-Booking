using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HotelManagementSystem.Controllers
{
    public class UsersController : Controller
    {
        // GET: Users
        public ActionResult UserIndex()
        {
            return View();
        }
    }
}