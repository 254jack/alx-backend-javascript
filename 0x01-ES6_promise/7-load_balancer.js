import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const res = [];

  try {
    const user = await signUpUser(firstName, lastName);
    res.push({ status: 'fulfilled', value: user });
  } catch (signupError) {
    res.push({
      status: 'rejected',
      value: `Signup error: ${signupError.toString()}`,
    });
  }

  try {
    const upload = await uploadPhoto(fileName);
    res.push({ status: 'fulfilled', value: upload });
  } catch (uploadError) {
    res.push({
      status: 'rejected',
      value: `Photo upload error: ${uploadError.toString()}`,
    });
  }
  export default async function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}


  return res;
}
