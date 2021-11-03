using Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.Security.Jwt
{
    public interface ITokenHolper
    {
        AccessToken CreateToken(User user,List<OperationClaim> operationClaims);

    }
}
