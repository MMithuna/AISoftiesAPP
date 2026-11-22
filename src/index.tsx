import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '../src/App';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { gql } from '@apollo/client';

const rootEl = document.getElementById('root');
if (rootEl) {
  const client = new ApolloClient({
    link:new HttpLink({uri: "http://localhost:3002/graphql"}),
    cache:new InMemoryCache()
  })

  // client.query({
  //   query:gql`
  //     query GetUser{
  //       getUser
  //     }`
  // })
  // .then((result) => console.log(result))
  // .catch(error => {
  //   console.error("FULL ERROR:", error);
  // });

  const root = createRoot(rootEl);
  root.render(
    <StrictMode>
      <ApolloProvider client={client}> 
        <App />
      </ApolloProvider>
    </StrictMode>,
  );
}
