const tokenAuthorization = 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0ZWFtY29yZS5uZXQiLCJzdWIiOiJpbnRlcnZpZXciLCJhdWQiOiJ0ZWFtY29yZS5uZXQvdGMtaW50ZXJ2aWV3Ly5nZXRfaW50ZXJ2aWV3IiwiZXhwIjoxNjAxNjY1OTgxLCJpYXQiOjE2MDEwNjExODEsImp0aSI6IjFfMTYwMTA2MTE4MV90ZWFtY29yZS5uZXQiLCJlbWFpbCI6ImludGVydmlld0B0ZWFtY29yZS5uZXQifQ.Fwo2uAqyvT5eAs2fM3y7tGGjqrDMWFe6D-k-3f0C2jSDcKX1n42NlyMqFvI1zx-xcjHWkS0BMJypwezhTzHuJA'
export const requestApi = (type: 'GET' | 'POST', data?: any) =>
  fetch('https://tc-interview-wflvg35ouq-uc.a.run.app/1/private/survey', { 
      method: type,
      headers: { 
        "Content-Type": 'application/json',
        authorization: `Bearer ${tokenAuthorization}`
      },
      body: JSON.stringify(data),
  } )
  .then(response => type==='GET'? response.json() : response)