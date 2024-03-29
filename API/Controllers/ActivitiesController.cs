using Application.Activities;
using Application.Core;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {

        [HttpGet]
        public async Task<IActionResult> GetActivities(){
            var result = await Mediator.Send(new List.Query());
            return HandleResult(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetActivity(Guid id){
            var result = await Mediator.Send(new Details.Query(){Id = id});

            return HandleResult(result);
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity){
            var result = await Mediator.Send(new Create.Command(){Activity = activity});
            return HandleResult(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Edit(Guid id, Activity activity){
            activity.Id = id;

            await Mediator.Send(new Edit.Command{Activity = activity});

            return Ok(new {Message = "Successfully updated activity"});
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id){
            await Mediator.Send(new Delete.Command{Id = id});

            return Ok(new {Message = "Successfully deleted activity"});
        }
    }
}