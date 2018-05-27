// @flow
import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import ReactJson from 'react-json-view';

export default class WalletStatus extends Component<Props> {
  render() {
    const {
      accounts,
      keys,
      settings,
      wallet
    } = this.props;
    const accountName = settings.account;
    const account = accounts[accountName];
    const server = settings.node;
    let element = `No account data loaded yet (connected to: ${server})...`;
    if (account && account.account_name) {
      element = (
        <div>
          <Header>
            Account: {accountName}
            <Header.Subheader>
              connected to: {server}
            </Header.Subheader>
          </Header>
          <ReactJson
            displayDataTypes={false}
            displayObjectSize={false}
            iconStyle="square"
            name={null}
            src={account}
            style={{ padding: '1em' }}
            theme="harmonic"
          />
        </div>
      );
    }
    return (
      <Segment basic>
        <ReactJson
          displayDataTypes={false}
          displayObjectSize={false}
          iconStyle="square"
          name={null}
          src={settings}
          style={{ padding: '1em' }}
          theme="harmonic"
        />
        <ReactJson
          displayDataTypes={false}
          displayObjectSize={false}
          iconStyle="square"
          name={null}
          src={keys}
          style={{ padding: '1em' }}
          theme="harmonic"
        />
        <ReactJson
          displayDataTypes={false}
          displayObjectSize={false}
          iconStyle="square"
          name={null}
          src={wallet}
          style={{ padding: '1em' }}
          theme="harmonic"
        />
        {element}
      </Segment>
    );
  }
}
