import 'package:flutter/material.dart';

class CommonApp extends StatelessWidget {
  const CommonApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Common App'),
      ),
      body: const Center(
        child: Text('Common App Page'),
      ),
    );
  }
}