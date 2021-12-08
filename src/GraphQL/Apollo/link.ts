import {ApolloLink, HttpLink} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import Toast from 'react-native-toast-message';

const baseURL = {
  dev: 'http://localhost:5000',
  dev1: 'https://api-ap-northeast-1.graphcms.com/v2/ckwhjc6l90ymo01xnarxj4q7k/master',
  dev2: 'https://api-ap-northeast-1.graphcms.com/v2/ckwhjc6l90ymo01xnarxj4q7k/master',
};

const httpLink: HttpLink = new HttpLink({
  uri: baseURL.dev2,
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Mzg3NzcwNjcsImF1ZCI6WyJodHRwczovL2FwaS1hcC1ub3J0aGVhc3QtMS5ncmFwaGNtcy5jb20vdjIvY2t3aGpjNmw5MHltbzAxeG5hcnhqNHE3ay9tYXN0ZXIiLCJodHRwczovL21hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiIzMTYzNTA4ZS1lYThkLTQ5NzgtOTRmZS1mMzZlMTc3ZjY5YjIiLCJqdGkiOiJja3d1ZGp4d2E1Ynh4MDF4bTl1Z3hmZGhmIn0.MwcWr0nAHqCrMBgpW_hN5RhXmQNtKb_vOFuBnjoPPw_bi5S0bFecr0q31VOTCWozLiM3Oaw7zJfNVh59MJZ3EMarsyH39hKZ2WK_qxp4AJAukN5VNMtC3gjdHAYXwUfRNTAvbb5lX1M874yTWEF8KHpjkrrdttTkpy53qBMz0yRGGOHmeZDTJ4TxOGrVrgaTHBcXWspYEIuO_h2c_mRnXwaSGnPv4l3wWCR4M1adrzlukgoYdw_NCOUt1mIlKemMKCOqhrefQ2R2LS_LwlrTLfLtxblH2rZkaGrQ97GuxbNhlihylbL9eXKtIXRuDrwBqmpxkEZLwMmU6cviKEEoqXoyF34uNat13HiD83ej4tPekJzgSLkd9xy6d2gx28lQ7LYSfPMp72ibeTZaagC75Ng8_fdPYLpOHykr9fI3mDNKVwQHDP7DjUiEGCL-hyyOyyD91jEJpkSZtySenOo7Qr3c8M0kWBwh5Kx7AnV4NFZVw1ZKZLjzm5qEHjuk9zoSfgJWiEEmN3wNb1Tmh64sTTB0IkG8KtNVYGZ1OxwElnlTrMwHzvG_qMf184V2NnRgI5fgL-TCBf_2h7P8vgEye_1_Vi2jmWjrpnnVVldkIW-aCiW29PVRxPZajIuZagCdROffMlYBIsgSEOKjHs_4hvoLNifDiqpNMQ37tPeKLwU',
  },
});

const errorLink: ApolloLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({message, locations, path}) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
      Toast.show({
        type: 'error',
        text1: 'Oops',
        text2: message,
      });
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

export {httpLink, errorLink};
