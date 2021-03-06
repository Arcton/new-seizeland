function sumPropertyValues(dest, source) {
  if (source == null) {
    return;
  }
  Object.entries(source).forEach(([property, value]) => {
    if (dest[property] == null) {
      dest[property] = value; // eslint-disable-line no-param-reassign
    } else {
      dest[property] += value; // eslint-disable-line no-param-reassign
    }
  });
}

function tickRegions(elapsedTicks, regions) {
  const resourcesDelta = {};
  Object.values(regions).forEach((region) => {
    if (region.isActive) {
      sumPropertyValues(resourcesDelta, region.tick(elapsedTicks));
    }
  });

  return resourcesDelta;
}

function updateResourcePool(resourcesDelta, resourcePool) {
  Object.entries(resourcesDelta).forEach(([key, value]) => {
    const resource = resourcePool.get(key);
    if (resource == null) {
      return;
    }

    resource.amount += value;
  });
}

export { sumPropertyValues, tickRegions, updateResourcePool };
