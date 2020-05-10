export default (text = "Hello11!!!🚀") => {
  const el = document.createElement("div");
  el.innerText = "загрузка...";
  el.addEventListener("click", async (e) => {
    const text = await import(
      /* webpackChunkName: 'lazyLoadText'*/ "../lazy-load-text/lazy-load-text"
    );
    console.log("-> text", text);
    el.innerText = text.default;
  });

  return el;
};
