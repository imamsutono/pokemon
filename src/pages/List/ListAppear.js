import React from 'react';

const ListAppear = ({count, next}) => {
  const renderAppear = () => {
    const param = new URLSearchParams(next.split('?')[1]);
    const end = param.get('offset');
    const itemAppear = param.get('limit');
    const start = Number(end) - itemAppear + 1;

    return `${start} - ${end}`;
  };

  return (
    <div className="column is-6 has-text-right">
      Menampilkan
      <strong> {renderAppear()} </strong>
      dari
      <strong> {count}</strong>
    </div>
  );
};

export default ListAppear;
