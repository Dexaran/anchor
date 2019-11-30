// @flow
import { get } from 'dot-prop-immutable';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import compose from 'lodash/fp/compose';
import { Progress } from 'semantic-ui-react';

class GlobalAccountFragmentResourceProgress extends PureComponent<Props> {
  render() {
    const {
      attached,
      label,
      resource,
      size,
      style,
    } = this.props;
    if (!resource) return false;
    const percent = ((resource.available / resource.max) * 100).toFixed(2);
    return (
      <Progress
        attached={attached}
        indicating
        content={label}
        percent={percent}
        size={size}
        style={style}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const account = ownProps.account.replace('.', '\\.');
  return {
    resource: get(state.accounts, `${account}.${ownProps.type}_limit`),
  };
};

export default compose(
  translate('global'),
  connect(mapStateToProps)
)(GlobalAccountFragmentResourceProgress);