async function fetchProfileData() {
   const url = 'https://raw.githubusercontent.com/JullioGaldino/Jullio-Cesar/main/data/profile1.json';
   const fetching = await fetch(url);
   return await fetching.json();
}