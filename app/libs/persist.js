export default (alt, storage, storageName) => {
  try {
    alt.bootstrap(storage.get(storageName));
  } catch (err) {
    console.error('Failed to bootstrap data', err);
  }

  alt.FinalStore.listen(() => {
    if (!storage.get('debug')) {
      storage.set(storageName, alt.takeSnapshot());
    }
  });
};
