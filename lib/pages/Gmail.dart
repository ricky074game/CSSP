import 'package:flutter/material.dart';

class Gmail extends StatefulWidget {
  const Gmail({Key? key}) : super(key: key);

  @override
  _GmailState createState() => _GmailState();
}

class _GmailState extends State<Gmail> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Row(
          children: [
            IconButton(
              icon: const Icon(Icons.menu),
              onPressed: () {},
            ),
            const SizedBox(width: 8),
            Image.asset(
              'assets/gmail/img.png',
              height: 24,
            ),
            const SizedBox(width: 16),
            Expanded(
              child: TextField(
                decoration: InputDecoration(
                  prefixIcon: const Icon(Icons.filter_list),
                  hintText: 'Search mail',
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(8),
                  ),
                ),
              ),
            ),
            IconButton(
              icon: const Icon(Icons.help_outline),
              onPressed: () {},
            ),
            IconButton(
              icon: const Icon(Icons.settings),
              onPressed: () {},
            ),
            const CircleAvatar(
              child: Icon(Icons.person),
            ),
          ],
        ),
      ),
      body: const Center(
        child: Text('Gmail Content'),
      ),
    );
  }
}