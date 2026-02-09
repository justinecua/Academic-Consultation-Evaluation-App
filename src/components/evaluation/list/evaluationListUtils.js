export const formatDate = dateString => {
  if (!dateString) return 'No date';

  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export const getRatingColor = rating => {
  if (rating >= 4) return '#38A169';
  if (rating >= 3) return '#D69E2E';
  return '#E53E3E';
};
