import React from 'react';

const DetailPhoto = ({data}) => {
  const renderThumbnail = () => (
    Object.keys(data.sprites).map(key => (
      typeof data.sprites[key] === 'string' ? (
        <div className="column is-3 m-1 thumbnail" key={key}>
          <img src={data.sprites[key]} alt={data.name} width="100%" />
        </div>
      ) : null
    ))
  );

  return (
    <div className="column is-3">
      <img src={data.sprites.front_default} alt={data.name} width="100%" />

      <div className="columns is-multiline mt-1">
        {renderThumbnail()}
      </div>
    </div>
  );
};

export default DetailPhoto;
