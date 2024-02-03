import React from "react";

const ErrorPage = ({ statusCode }) => {
    return (
      <div>
        <h1>
          {statusCode
            ? `Błąd ${statusCode}`
            : 'Wystąpił nieoczekiwany błąd'}
        </h1>
      </div>
    );
  };
  
  ErrorPage.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
  };
  
  export default ErrorPage;
  