export const formatDate = d =>
  d
    ? new Date(d).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : '—';

export const formatTime = t =>
  t
    ? new Date(`2000-01-01T${t}`).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      })
    : '—';

export const getRatingColor = r => {
  if (r >= 4) return '#059669';
  if (r >= 3) return '#D97706';
  return '#DC2626';
};
