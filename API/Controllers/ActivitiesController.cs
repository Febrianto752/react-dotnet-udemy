using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivitiesController : ControllerBase
    {
        private readonly DataContext _context;
        public ActivitiesController(DataContext context){
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Test(){
            var activities = await _context.Activities.ToListAsync();
            return Ok(new {data = activities});
        }

        [HttpGet("{id}")]
        public IActionResult GetActivity(Guid id){
            var activity = _context.Activities.Find(id);
            return Ok(new {data = activity});
        }

    }
}