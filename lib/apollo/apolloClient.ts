import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
    NormalizedCacheObject,
  } from "@apollo/client";
  import { onError } from "@apollo/client/link/error";
  import { setContext } from "@apollo/client/link/context";
  import { themeModeVar } from "./reactive-states";
  
  const authToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjhjMWY1ZjI5Mjc2ODEyMTg4MTEyMTIiLCJyb2xlIjpbInBlcnNvbmFsX3N0eWxpc3QiLCJ1c2VyIl0sImZpcnN0TmFtZSI6ImRlbW8iLCJsYXN0TmFtZSI6IlVzZXIiLCJmdWxsTmFtZSI6IlRlc3QyMSBUZXN0MjEiLCJlbWFpbCI6InRlc3QyMUBnbWFpbC5jb20iLCJwaG9uZSI6IjkxMTExMTExMjEiLCJjb3VudHJ5Q29kZSI6IjkxIiwibGFzdG5vdGlmaWVkIjp7fSwiaW1hZ2VzIjp7Im90aGVyIjpbXSwicHJvZmlsZSI6Imh0dHBzOi8vczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL21wZi1wdWJsaWMtZGF0YS9NUEYlMkZ1c2VycyUyRjVmOGMxZjVmMjkyNzY4MTIxODgxMTIxMiUyRjM2OW11c2ljLmpwZyJ9LCJ0YWdzIjpbInVzZXIiLG51bGxdLCJwc2dFeGlzdHMiOmZhbHNlLCJpc01vYmlsZVZlcmlmaWVkIjp0cnVlLCJpc0VtYWlsVmVyaWZpZWQiOnRydWUsImlhdCI6MTcyODkwMTAwNjg5MX0.do95wfhWf_u5w7GJxSE6v6e8WSiV0CuGUYHp_QPHDbk`;
  
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      });
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });
  
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_MPF_API_URL,
  });
  
  const authLink = setContext((_, { headers }) => {
    //const sessionToken = Cookies.get("session-token");
    return {
      headers: {
        ...headers,
        authorization: authToken ? `Bearer ${authToken}` : "",
      },
    };
  });
  
  const initApolloClient = (): ApolloClient<NormalizedCacheObject> => {
    const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
      ssrMode: typeof window === "undefined",
      link: errorLink.concat(authLink.concat(httpLink)),
      cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              themeMode: {
                read() {
                  if (typeof window !== "undefined") {
                    const _themeMode = window.localStorage.getItem("THEME_MODE");
                    if (_themeMode) {
                      themeModeVar(_themeMode);
                    }
                  }
                },
              },
            },
          },
        },
      }),
      connectToDevTools: process.env.NODE_ENV === "development" ? true : false,
    });
  
    return apolloClient;
  };
  const apolloClient: ApolloClient<NormalizedCacheObject> = initApolloClient();
  export default apolloClient;
  