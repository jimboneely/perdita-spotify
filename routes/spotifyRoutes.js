// var axios = require('axios');
//var request = require('request');
//
// module.exports = function(app){
//
// app.get('/search/:song', function(req, res){
//   if (req.params.song) {
//     axios.get('https://api.spotify.com/v1/search?q='+req.params.song+'&type=track',{
//       headers: {'Authorization': 'Bearer ' + access_token},
//         }).then(function(res){
//           var trackIDs = [];
//           var items = res.data.tracks.items
//           for (var i = 0; i < items.length; i++) {
//             trackIDs.push(items[i].id)
//
//           }
//           console.log(trackIDs)
//
//         }).catch(function (error) {
//             console.log(error);
//         });
//       }
// })
// };
