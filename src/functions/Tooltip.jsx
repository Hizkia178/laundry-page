export function initTooltip() {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(el => {
    new bootstrap.Tooltip(el);
  });
}