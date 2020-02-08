module.exports = (props) => $.magnificPopup.open({
  removalDelay: 200,
  type:         'inline',
  ...props,
  callbacks:    {
    ...props.callbacks,
  },
});
