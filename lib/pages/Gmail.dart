import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:cssp/pages/gmail_list.dart'; // Add this import

class Gmail extends StatelessWidget {
  final Map<String, String> email;

  Gmail({required this.email});

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
            backgroundImage: AssetImage('assets/img/avatar.svg'),
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
                // Email Header
                Container(
                  height: 176,
                  decoration: const BoxDecoration(
                    border: Border(
                      bottom: BorderSide(color: Color(0xFFedeff1)),
                    ),
                  ),
                  child: Column(
                    children: [
                      // Header Buttons
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Row(
                            children: [
                              IconButton(
                                icon: const Icon(Icons.arrow_back, size: 18),
                                onPressed: () {
                                  Navigator.pushReplacement(
                                    context,
                                    PageRouteBuilder(
                                      pageBuilder:
                                          (context, animation1, animation2) =>
                                              GmailList(),
                                      transitionDuration: Duration.zero,
                                      reverseTransitionDuration: Duration.zero,
                                    ),
                                  );
                                },
                              ),
                              IconButton(
                                icon: const Icon(Icons.archive, size: 18),
                                onPressed: () {},
                              ),
                              IconButton(
                                icon: const Icon(Icons.report, size: 18),
                                onPressed: () {},
                              ),
                              IconButton(
                                icon: const Icon(Icons.delete, size: 18),
                                onPressed: () {},
                              ),
                              const VerticalDivider(),
                              IconButton(
                                icon:
                                    const Icon(Icons.mark_as_unread, size: 18),
                                onPressed: () {},
                              ),
                              IconButton(
                                icon: const Icon(Icons.access_time, size: 18),
                                onPressed: () {},
                              ),
                              IconButton(
                                icon: const Icon(Icons.add_task, size: 18),
                                onPressed: () {},
                              ),
                              const VerticalDivider(),
                              IconButton(
                                icon:
                                    const Icon(Icons.drive_file_move, size: 18),
                                onPressed: () {},
                              ),
                              IconButton(
                                icon: const Icon(Icons.label, size: 18),
                                onPressed: () {},
                              ),
                              IconButton(
                                icon: const Icon(Icons.more_vert, size: 18),
                                onPressed: () {},
                              ),
                            ],
                          ),
                          Row(
                            children: [
                              const Text(
                                '1 of 16',
                                style: TextStyle(
                                  fontFamily: 'Roboto',
                                ),
                              ),
                              IconButton(
                                icon:
                                    const Icon(Icons.arrow_back_ios, size: 18),
                                onPressed: () {},
                              ),
                              IconButton(
                                icon: const Icon(Icons.arrow_forward_ios,
                                    size: 18),
                                onPressed: () {},
                              ),
                            ],
                          ),
                        ],
                      ),
                      // Email Title
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 16.0),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Row(
                              children: [
                                Text(
                                  email['subject']!,
                                  style: const TextStyle(
                                    fontSize: 22,
                                    fontWeight: FontWeight.w500,
                                    fontFamily: 'Roboto',
                                  ),
                                ),
                                const SizedBox(width: 8),
                                SvgPicture.asset(
                                  'assets/icon/yellow-title-tag.svg',
                                  height: 16,
                                ),
                                Container(
                                  padding: const EdgeInsets.symmetric(
                                    horizontal: 8,
                                    vertical: 4,
                                  ),
                                  decoration: BoxDecoration(
                                    color: const Color(0xFFe0e0e0),
                                    borderRadius: BorderRadius.circular(4),
                                  ),
                                  child: Row(
                                    children: [
                                      Text(
                                        'Inbox',
                                        style: const TextStyle(
                                          fontSize: 11,
                                          fontFamily: 'Roboto',
                                        ),
                                      ),
                                      const SizedBox(width: 4),
                                      const Text(
                                        'x',
                                        style: TextStyle(
                                          fontSize: 8,
                                          fontFamily: 'Roboto',
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                            Row(
                              children: [
                                IconButton(
                                  icon: const Icon(Icons.print, size: 18),
                                  onPressed: () {},
                                ),
                                IconButton(
                                  icon: const Icon(Icons.open_in_new, size: 18),
                                  onPressed: () {},
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),
                      // Email From
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 16.0),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Row(
                              children: [
                                CircleAvatar(
                                  backgroundImage:
                                      AssetImage(email['avatar']!),
                                ),
                                const SizedBox(width: 8),
                                Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Row(
                                      children: [
                                        Text(
                                          'FROM ',
                                          style: const TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontFamily: 'Roboto',
                                          ),
                                        ),
                                        Text(email['sender']!),
                                        const SizedBox(width: 8),
                                        const Text(
                                          'Unsubscribe',
                                          style: TextStyle(
                                            fontSize: 10,
                                            decoration:
                                                TextDecoration.underline,
                                            fontFamily: 'Roboto',
                                          ),
                                        ),
                                      ],
                                    ),
                                    Row(
                                      children: [
                                        const Text(
                                          'to me',
                                          style: TextStyle(
                                            fontFamily: 'Roboto',
                                          ),
                                        ),
                                        const Icon(Icons.arrow_drop_down, size: 18),
                                      ],
                                    ),
                                  ],
                                ),
                              ],
                            ),
                            Row(
                              children: [
                                Text(
                                  email['time']!,
                                  style: const TextStyle(
                                    fontFamily: 'Roboto',
                                  ),
                                ),
                                IconButton(
                                  icon: const Icon(Icons.star_border, size: 18),
                                  onPressed: () {},
                                ),
                                IconButton(
                                  icon: const Icon(Icons.reply, size: 18),
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
                    ],
                  ),
                ),
                // Email Body
                Expanded(
                  child: Container(
                    color: const Color(0xFFebfaff),
                    child: SingleChildScrollView(
                      padding: const EdgeInsets.all(16.0),
                      child: Text(
                        email['snippet']!,
                        style: const TextStyle(
                          fontSize: 16,
                          fontFamily: 'Roboto',
                        ),
                      ),
                    ),
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

  Widget _buildMailCard() {
    return Container(
      width: 180,
      height: 254,
      margin: const EdgeInsets.all(8),
      color: const Color(0xFF04bdff),
      child: Center(
        child:
            SvgPicture.asset('assets/img/mail-img-placeholder.svg', height: 40),
      ),
    );
  }
}
