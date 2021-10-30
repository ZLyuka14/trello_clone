/**
 * This function starts progress bar located at the top of the page.
 */
export function startLoader(): void {
  const progressBar = document.querySelector('.loading__bar')?.firstElementChild;
  setTimeout(() => {
    progressBar?.classList.add('bar__20');
  }, 100);
}

/**
 * This function finishes progress bar and restarts its position.
 */
export function finishLoader(): void {
  const progressBar = document.querySelector('.loading__bar')?.firstElementChild;
  setTimeout(() => {
    progressBar?.classList.add('bar__100');
  }, 100);

  setTimeout(() => {
    progressBar?.classList.add('bar__complete');
  }, 300);

  setTimeout(() => {
    progressBar?.classList.remove('bar__100');
    progressBar?.classList.remove('bar__20');
  }, 500);

  setTimeout(() => {
    progressBar?.classList.remove('bar__complete');
  }, 1000);
}
