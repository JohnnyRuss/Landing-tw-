function useRestrictBodyFlow() {
  function restrict(task: boolean) {
    const body = document.querySelector("body");

    if (!body) return;

    if (task) body.style.overflow = "hidden";
    else body.style.overflow = "auto";
  }

  return { restrict };
}

export default useRestrictBodyFlow;
