import 'package:cssp/pages/Gmail.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class GmailList extends StatefulWidget {
  @override
  _GmailListState createState() => _GmailListState();
}

class _GmailListState extends State<GmailList> {
  final List<Map<String, dynamic>> emails = [
    {
      'sender': 'Google',
      'subject': 'Welcome to Gmail',
      'snippet': 'We are excited to have you on board.',
      'time': '8:00 AM',
      'avatar': 'assets/img/google-logo.svg',
      'read': false,
    },
    {
      'sender': 'Flutter',
      'subject': 'Flutter 2.0 Released',
      'snippet': 'Check out the new features in Flutter 2.0.',
      'time': '7:45 AM',
      'avatar': 'assets/img/flutter-logo.svg',
      'read': false,
    },
    // Add more emails here
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 1,
        title: Row(
          children: [
            IconButton(
              icon: const Icon(Icons.menu, color: Colors.black),
              onPressed: () {},
            ),
            Image.asset('assets/img/gmail-logo.png', height: 24),
            const SizedBox(width: 8),
            const Text(
              'Gmail',
              style: TextStyle(
                color: Color(0xFF606367),
                fontSize: 22,
                fontWeight: FontWeight.w500,
                fontFamily: 'Roboto',
              ),
            ),
          ],
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.help_outline, color: Colors.black),
            onPressed: () {},
          ),
          IconButton(
            icon: const Icon(Icons.settings, color: Colors.black),
            onPressed: () {},
          ),
          IconButton(
            icon: const Icon(Icons.apps, color: Colors.black),
            onPressed: () {},
          ),
          const CircleAvatar(
            backgroundImage: AssetImage('assets/img/avatar.png'),
          ),
          const SizedBox(width: 16),
        ],
      ),
      body: Row(
        children: [
          // Left Menu
          Container(
            width: 254,
            decoration: const BoxDecoration(
              border: Border(
                right: BorderSide(color: Color(0xFFedeff1)),
              ),
            ),
            child: Column(
              children: [
                // Compose Button
                Padding(
                  padding: const EdgeInsets.all(12.0),
                  child: Align(
                    alignment: Alignment.centerLeft,
                    child: ElevatedButton.icon(
                      onPressed: () {},
                      icon: SvgPicture.asset('assets/icon/plus-icon.svg',
                          height: 24),
                      label: const Text('Compose'),
                      style: ElevatedButton.styleFrom(
                        foregroundColor: const Color(0xFF777b7e),
                        backgroundColor: Colors.white,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(27),
                        ),
                        elevation: 1,
                      ),
                    ),
                  ),
                ),
                // Menu Categories
                Expanded(
                  child: ListView(
                    children: [
                      _buildMenuItem(
                        icon: Icons.inbox,
                        text: 'Inbox',
                        count: '99',
                        selected: true,
                      ),
                      _buildMenuItem(
                        icon: Icons.star,
                        text: 'Starred',
                      ),
                      _buildMenuItem(
                        icon: Icons.snooze,
                        text: 'Snoozed',
                      ),
                      _buildMenuItem(
                        icon: Icons.label_important,
                        text: 'Important',
                      ),
                      _buildMenuItem(
                        icon: Icons.send,
                        text: 'Sent',
                      ),
                      _buildMenuItem(
                        icon: Icons.delete,
                        text: 'Trash',
                      ),
                      _buildMenuItem(
                        icon: Icons.drafts,
                        text: 'Drafts',
                        count: '14',
                      ),
                    ],
                  ),
                ),
                // Meet Section
                Container(
                  decoration: const BoxDecoration(
                    border: Border(
                      top: BorderSide(color: Color(0xFFedeff1)),
                    ),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Padding(
                        padding: EdgeInsets.all(16.0),
                        child: Text(
                          'Meet',
                          style: TextStyle(
                            color: Color(0xFF414244),
                            fontSize: 14,
                            fontFamily: 'Roboto',
                          ),
                        ),
                      ),
                      _buildMenuItem(
                        icon: Icons.video_call,
                        text: 'New meeting',
                      ),
                      _buildMenuItem(
                        icon: Icons.calendar_today,
                        text: 'My meetings',
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          // Main Content
          Expanded(
            child: Column(
              children: [
                // Top Bar
                Container(
                  color: Colors.white,
                  padding: const EdgeInsets.symmetric(horizontal: 16),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Row(
                        children: [
                          IconButton(
                            icon: const Icon(Icons.check_box_outline_blank,
                                size: 18),
                            onPressed: () {},
                          ),
                          IconButton(
                            icon: const Icon(Icons.refresh, size: 18),
                            onPressed: () {},
                          ),
                          IconButton(
                            icon: const Icon(Icons.more_vert, size: 18),
                            onPressed: () {},
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
                const Divider(height: 1),
                Expanded(
                  child: ListView.builder(
                    itemCount: emails.length,
                    itemBuilder: (context, index) {
                      final email = emails[index];
                      return ListTile(
                        leading: SvgPicture.asset(
                          email['avatar']!,
                          height: 40,
                          width: 40,
                        ),
                        title: Text(
                          email['sender']!,
                          style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 16,
                            fontFamily: 'Roboto',
                            color: email['read'] ? Colors.grey : Colors.black,
                          ),
                        ),
                        subtitle: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              email['subject']!,
                              style: TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: 14,
                                fontFamily: 'Roboto',
                                color:
                                    email['read'] ? Colors.grey : Colors.black,
                              ),
                            ),
                            Text(
                              email['snippet']!,
                              style: TextStyle(
                                fontSize: 14,
                                fontFamily: 'Roboto',
                                color:
                                    email['read'] ? Colors.grey : Colors.black,
                              ),
                            ),
                          ],
                        ),
                        trailing: Text(
                          email['time']!,
                          style: const TextStyle(
                            fontSize: 12,
                            color: Colors.grey,
                            fontFamily: 'Roboto',
                          ),
                        ),
                        isThreeLine: true,
                        contentPadding: const EdgeInsets.symmetric(
                            horizontal: 16, vertical: 8),
                        onTap: () {
                          setState(() {
                            email['read'] = true;
                          });
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => Gmail(
                                  email: email.map((key, value) =>
                                      MapEntry(key, value.toString()))),
                            ),
                          );
                        },
                      );
                    },
                  ),
                ),
              ],
            ),
          ),
          // Right Menu
          Container(
            width: 56,
            decoration: const BoxDecoration(
              border: Border(
                left: BorderSide(color: Color(0xFFedeff1)),
              ),
            ),
            child: Column(
              children: [
                IconButton(
                  icon: SvgPicture.asset('assets/icon/google-keep.svg'),
                  onPressed: () {},
                ),
                IconButton(
                  icon: SvgPicture.asset('assets/icon/google-calendar.svg'),
                  onPressed: () {},
                ),
                const Divider(),
                IconButton(
                  icon: SvgPicture.asset('assets/icon/right-bar-plus.svg'),
                  onPressed: () {},
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildMenuItem({
    required IconData icon,
    required String text,
    String? count,
    bool selected = false,
  }) {
    return Container(
      color: selected ? const Color(0xFFfce8e7) : Colors.transparent,
      child: ListTile(
        leading: Icon(icon, size: 24),
        title: Text(text),
        trailing: count != null ? Text(count) : null,
      ),
    );
  }
}
