async function fetchProfileData() {
   const url = 'https://raw.githubusercontent.com/JullioGaldino/Jullio-Cesar/main/profile.json?token=GHSAT0AAAAAACXAQC7OWFTO77ZCXC57MDI2ZWYLSZQ';
   const fetching = await fetch(url);
   return await fetching.json();
}