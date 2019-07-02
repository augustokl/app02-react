/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import moment from 'moment';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

import CompareList from '../../components/compareList/index';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryErro: false,
    repositoryInput: '',
    repositories: [],
  };

  handleAddRepo = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryErro: false,
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
      });
    } catch (error) {
      this.setState({ repositoryErro: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form error={this.state.repositoryErro} onSubmit={this.handleAddRepo}>
          <input
            type="text"
            placeholder="usuário/respositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : '+'}
          </button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
