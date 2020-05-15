export function fetchComments(id) {
    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&---',id);

    fetch('https://hn.algolia.com/api/v1/items/' + id, {
        method: 'GET'
    })
    .then((resp) => {
        console.log('first then --- &&&&&&&&&&&&&&&&&&&&&&&&&---',resp.data);
        console.log('first then --- &&&&&---',resp.json);
        return resp;
    })
    .then((response) => {
        console.log('second then --- &&&&&&&&&&&&&&&&&&&&&&&&&---');
        console.log(response);
        return response;
    }).catch((error) =>{
        console.log(" ******* Error is fetchComments ******* ",error);
    }        
    );
  }
  
  export function resendCodePairingInviteSuccess(data) {
    return {
    };
  }