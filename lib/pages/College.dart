import 'package:flutter/material.dart';

class College extends StatelessWidget {
  const College({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('College'),
      ),
      body: const Center(
        child: Text('College Page'),
      ),
    );
  }
}