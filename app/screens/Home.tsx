import * as React from 'react';
import { View, Text } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';

export default () => (
    <Container>
        <Logo />
        <Text style={styles.text}>Cross-institutional Drug-Induced Livery Injury Registry</Text>
    </Container>
);
