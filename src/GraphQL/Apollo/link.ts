import {HttpLink} from '@apollo/client';
import {onError} from '@apollo/client/link/error';

const baseURL = {
  dev: 'http://localhost:5000',
  dev1: 'https://api-ap-northeast-1.graphcms.com/v2/ckwhjc6l90ymo01xnarxj4q7k/master',
};

const httpLink = new HttpLink({
  uri: baseURL.dev1,
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MzgyMDIxMDAsImF1ZCI6WyJodHRwczovL2FwaS1hcC1ub3J0aGVhc3QtMS5ncmFwaGNtcy5jb20vdjIvY2t3aGpjNmw5MHltbzAxeG5hcnhqNHE3ay9tYXN0ZXIiLCJodHRwczovL21hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiIyOTVmMWU5NS1mMDdiLTRlOTEtYWEyMi04YTNjYjVkZWFhYWMiLCJqdGkiOiJja3drdjhlcXgwc3A3MDF5dGY2eGo0bDJuIn0.PVOeSX0ddc5f2MC2_2NlBUiL3tNtKmDrfqpENj_6qYPR_iPmMIsF8FQ1WsitnFYRGCvTZ-4rdr0lyMUsbArn-tOiHGVKHGRiQr2yvsG6LM4Jc_iwNivdvln3OSKIkzGIVPoyqAhIqTMuWkUorH-0aQs0mW21bW5o3EWZs8kdkccQhJa7kgulPtTKc5VQKti2xBJIeO_Hnu7H5_apsaIa-qbmQj-FsEl-D_Ay4jynhLloDCVjaO4jxanhJxAzOHkN539g1X6xaPIDwJH_BK-klULizMQJITikEn7UqOtJxNwBEh63MZ3TCz_23oCaL3KsTnuPTikuntTrgsWNPkP9dX3rziMD4uPekl5Vqh2Y34HY_PWMiaJxB9XN5nrtkFlM-CG2BnN1x7TuoNZqL9O2tN6Kw2zcjYTvqpZkVTJ5KQe-rc1vXjVeZ6cnAhBvzZYLCuRdjS7SXo78GIghiVD3Zj-xEWkS07Uffa5WG_INJQv4tLCrT_-zXZ8fIKIzvcuxnqvkLYC7aIeVrCgBkx0RTu_r-BD1Lgy7Ijb9EnqHVl_gv1gFncTptMckFWdyTGKuU7rjImRK1JOf--Qq-0i1AY8lTkqFgIJ_lWz4XU9s8G_q9ly1vjUXGt4T9XRILAyGLr8nX9vYrL9Fl10g1_gChTM9IEZieIL-wZw-CMjcppo',
  },
});

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({message, locations, path}) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

export {httpLink, errorLink};
