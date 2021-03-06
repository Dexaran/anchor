// @flow
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Button, Container, Table } from 'semantic-ui-react';

export class GlobalModalSettingsCustomTokensConfirm extends Component<Props> {
  render() {
    const {
      onSubmit,
      t,
      token
    } = this.props;
    return (
      <React.Fragment>
        <Table definition>
          <Table.Row>
            <Table.Cell width={4}>
              <p>
                {t('global_modal_settings_customtoken_confirm_issuer')}
              </p>
            </Table.Cell>
            <Table.Cell>
              <p>
                {token.issuer}
              </p>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <p>
                {t('global_modal_settings_customtoken_confirm_supply')}
              </p>
            </Table.Cell>
            <Table.Cell>
              <p>
                {token.supply}
              </p>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <p>
                {t('global_modal_settings_customtoken_confirm_maxsupply')}
              </p>
            </Table.Cell>
            <Table.Cell>
              <p>
                {token.max_supply}
              </p>
            </Table.Cell>
          </Table.Row>
        </Table>
        <Container textAlign="center">
          <Button
            color="green"
            content={<p>{t('global_modal_settings_customtoken_confirm')}</p>}
            onClick={onSubmit}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default withTranslation('global')(GlobalModalSettingsCustomTokensConfirm);
