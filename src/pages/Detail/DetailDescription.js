import React from 'react';

const DetailDescription = ({data}) => {
  const renderInlineList = (listKey, itemKey) => {
    let result = '';
    data[listKey].map((item) => result += `${item[itemKey].name} ∙ `);
    return result.slice(0, -3);
  };

  const renderStats = () => (
    data.stats.map(({base_stat, stat}) => (
      <div key={stat.name} className="mb-2">
        <p>{stat.name} ({base_stat})</p>
        <progress className="progress is-warning" value={base_stat} max="100" />
      </div>
    ))
  );

  return (
    <div className="column is-8">
      <p className="title is-size-1 mb-5">
        {`${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`}
      </p>

      <div className="columns">
        <div className="column">
          <strong className="has-text-grey">Types</strong>
          <p className="is-size-5">
            <strong>{renderInlineList('types', 'type')}</strong>
          </p>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <strong className="has-text-grey">Abilities</strong>
          <p className="is-size-5">
            <strong>{renderInlineList('abilities', 'ability')}</strong>
          </p>
        </div>
      </div>
      <div className="columns">
        <div className="column is-2">
          <strong className="has-text-grey">Height</strong>
          <p className="is-size-5"><strong>{data.height}</strong></p>
        </div>
        <div className="column is-2">
          <strong className="has-text-grey">Weight</strong>
          <p className="is-size-5"><strong>{data.weight}</strong></p>
        </div>
      </div>
      <div className="columns mb-4">
        <div className="column is-6">
          <strong className="has-text-grey">Base Stats</strong>
          <div className="mt-4"></div>
          {renderStats()}
        </div>
      </div>
    </div>
  );
};

export default DetailDescription;
