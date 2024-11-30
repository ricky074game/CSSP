import 'package:cssp/pages/Gmail.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _selectedIndex = 0;
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
  final ValueNotifier<bool> _isDrawerOpen = ValueNotifier(false);

  static final List<Widget> _pages = <Widget>[
    
    Gmail(),
    const Center(child: Text('Page 2')),
    const Center(child: Text('Page 3')),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      appBar: AppBar(
        leading: ValueListenableBuilder<bool>(
          valueListenable: _isDrawerOpen,
          builder: (context, isOpen, child) {
            return IconButton(
              icon: Icon(isOpen ? Icons.arrow_back : Icons.arrow_forward),
              onPressed: () {
                if (isOpen) {
                  Navigator.of(context).pop();
                } else {
                  _scaffoldKey.currentState?.openDrawer();
                }
                _isDrawerOpen.value = !isOpen;
              },
            );
          },
        ),
      ),
      drawerScrimColor: Colors.transparent,
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: <Widget>[
            const SizedBox(height: 16), // Add spacing from the top
            Container(
              margin: const EdgeInsets.symmetric(vertical: 8, horizontal: 16),
              decoration: BoxDecoration(
                border: Border.all(color: Colors.grey),
                borderRadius: BorderRadius.circular(8),
              ),
              child: ListTile(
                leading: const Icon(Icons.email),
                title: const Text('Gmail'),
                onTap: () {
                  _onItemTapped(0);
                },
              ),
            ),
            Container(
              margin: const EdgeInsets.symmetric(vertical: 8, horizontal: 16),
              decoration: BoxDecoration(
                border: Border.all(color: Colors.grey),
                borderRadius: BorderRadius.circular(8),
              ),
              child: ListTile(
                leading: const Icon(Icons.pageview),
                title: const Text('Page 2'),
                onTap: () {
                  _onItemTapped(1);
                },
              ),
            ),
            Container(
              margin: const EdgeInsets.symmetric(vertical: 8, horizontal: 16),
              decoration: BoxDecoration(
                border: Border.all(color: Colors.grey),
                borderRadius: BorderRadius.circular(8),
              ),
              child: ListTile(
                leading: const Icon(Icons.pageview),
                title: const Text('Page 3'),
                onTap: () {
                  _onItemTapped(2);
                },
              ),
            ),
          ],
        ),
      ),
      body: IndexedStack(
        index: _selectedIndex,
        children: _pages,
      ),
    );
  }
}
