using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<Result<List<Activity>>> {}

        public class Handler : IRequestHandler<Query, Result<List<Activity>>>
        {
            private readonly DataContext _context;
            public readonly ILogger<List> _logger;
            public Handler(DataContext context, ILogger<List> logger){
                _context = context;
                _logger = logger;
            }
            public async Task<Result<List<Activity>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var activities = await _context.Activities.ToListAsync();

                if (activities == null){
                    return Result<List<Activity>>.Failure("not found");
                }
                return Result<List<Activity>>.Success(activities);
            }
        }
    }
}