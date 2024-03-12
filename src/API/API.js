export const getMemes = async () => {
   const response = await fetch("https://api.imgflip.com/get_memes");
   console.log(response);
   return response.json();
 }
 