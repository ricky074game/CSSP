import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Gmail extends StatelessWidget {
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
                // Menu Categories
                Expanded(
                  child: ListView(
                    children: [
                      _buildMenuItem(
                        icon: 'assets/icon/inbox-icon.svg',
                        text: 'Inbox',
                        count: '99',
                        selected: true,
                      ),
                      _buildMenuItem(
                        icon: 'assets/icon/starred-icon.svg',
                        text: 'Starred',
                      ),
                      _buildMenuItem(
                        icon: 'assets/icon/snoozed-icon.svg',
                        text: 'Snoozed',
                      ),
                      _buildMenuItem(
                        icon: 'assets/icon/important-icon.svg',
                        text: 'Important',
                      ),
                      _buildMenuItem(
                        icon: 'assets/icon/sent-icon.svg',
                        text: 'Sent',
                      ),
                      _buildMenuItem(
                        icon: 'assets/icon/trash-icon.svg',
                        text: 'Trash',
                      ),
                      _buildMenuItem(
                        icon: 'assets/icon/drafts-icon.svg',
                        text: 'Drafts',
                        count: '14',
                      ),
                      _buildMenuItem(
                        icon: 'assets/icon/starred-icon.svg',
                        text: 'Categories',
                      ),
                      _buildMenuItem(
                        icon: 'assets/icon/green-tag.svg',
                        text: 'Team',
                      ),
                      _buildMenuItem(
                        icon: 'assets/icon/yellow-tag.svg',
                        text: 'News',
                      ),
                      _buildMenuItem(
                        icon: 'assets/icon/blue-tag.svg',
                        text: 'Work',
                      ),
                      _buildMenuItem(
                        icon: 'assets/icon/red-tag.svg',
                        text: 'Personal',
                      ),
                      _buildMenuItem(
                        icon: 'assets/icon/arrow-icon.svg',
                        text: 'More',
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
                          ),
                        ),
                      ),
                      _buildMenuItem(
                        icon: 'assets/icon/meet-icon.svg',
                        text: 'New meeting',
                      ),
                      _buildMenuItem(
                        icon: 'assets/icon/calendar-meet-icon.svg',
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
                                icon: const Icon(Icons.arrow_back),
                                onPressed: () {},
                              ),
                              IconButton(
                                icon: const Icon(Icons.archive),
                                onPressed: () {},
                              ),
                              IconButton(
                                icon: const Icon(Icons.report),
                                onPressed: () {},
                              ),
                              IconButton(
                                icon: const Icon(Icons.delete),
                                onPressed: () {},
                              ),
                              const VerticalDivider(),
                              IconButton(
                                icon: const Icon(Icons.mark_as_unread),
                                onPressed: () {},
                              ),
                              IconButton(
                                icon: const Icon(Icons.access_time),
                                onPressed: () {},
                              ),
                              IconButton(
                                icon: const Icon(Icons.add_task),
                                onPressed: () {},
                              ),
                              const VerticalDivider(),
                              IconButton(
                                icon: const Icon(Icons.drive_file_move),
                                onPressed: () {},
                              ),
                              IconButton(
                                icon: const Icon(Icons.label),
                                onPressed: () {},
                              ),
                              IconButton(
                                icon: const Icon(Icons.more_vert),
                                onPressed: () {},
                              ),
                            ],
                          ),
                          Row(
                            children: [
                              const Text('1 of 16'),
                              IconButton(
                                icon: const Icon(Icons.arrow_back_ios),
                                onPressed: () {},
                              ),
                              IconButton(
                                icon: const Icon(Icons.arrow_forward_ios),
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
                                const Text(
                                  'New Gmail inbox',
                                  style: TextStyle(
                                    fontSize: 22,
                                    fontWeight: FontWeight.w500,
                                  ),
                                ),
                                const SizedBox(width: 8),
                                SvgPicture.asset(
                                  'assets/icon/yellow-title-tag.svg',
                                  height: 24,
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
                                  child: const Row(
                                    children: [
                                      Text(
                                        'Inbox',
                                        style: TextStyle(fontSize: 11),
                                      ),
                                      SizedBox(width: 4),
                                      Text(
                                        'x',
                                        style: TextStyle(fontSize: 8),
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                            Row(
                              children: [
                                IconButton(
                                  icon: const Icon(Icons.print),
                                  onPressed: () {},
                                ),
                                IconButton(
                                  icon: const Icon(Icons.open_in_new),
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
                            const Row(
                              children: [
                                CircleAvatar(
                                  backgroundImage:
                                      AssetImage('assets/img/avatar.svg'),
                                ),
                                SizedBox(width: 8),
                                Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Row(
                                      children: [
                                        Text(
                                          'FROM ',
                                          style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                          ),
                                        ),
                                        Text('<email@mail.service>'),
                                        SizedBox(width: 8),
                                        Text(
                                          'Unsubscribe',
                                          style: TextStyle(
                                            fontSize: 10,
                                            decoration:
                                                TextDecoration.underline,
                                          ),
                                        ),
                                      ],
                                    ),
                                    Row(
                                      children: [
                                        Text('to me'),
                                        Icon(Icons.arrow_drop_down),
                                      ],
                                    ),
                                  ],
                                ),
                              ],
                            ),
                            Row(
                              children: [
                                const Text('8:02 AM (34 minutes ago)'),
                                IconButton(
                                  icon: const Icon(Icons.star_border),
                                  onPressed: () {},
                                ),
                                IconButton(
                                  icon: const Icon(Icons.reply),
                                  onPressed: () {},
                                ),
                                IconButton(
                                  icon: const Icon(Icons.more_vert),
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
                    child: Column(
                      children: [
                        // Email Content
                        Container(
                          width: 660,
                          margin: const EdgeInsets.symmetric(vertical: 31),
                          child: Column(
                            children: [
                              // Top Section
                              Row(
                                children: [
                                  Expanded(
                                    child: Container(
                                      color: const Color(0xFF04bdff),
                                      padding: const EdgeInsets.all(16),
                                      child: Column(
                                        children: [
                                          const Text(
                                            'Gmail inbox\ntemplate',
                                            style: TextStyle(
                                              fontSize: 40,
                                              color: Colors.white,
                                              fontWeight: FontWeight.bold,
                                            ),
                                          ),
                                          const SizedBox(height: 16),
                                          ElevatedButton(
                                            onPressed: () {},
                                            child: const Row(
                                              mainAxisSize: MainAxisSize.min,
                                              children: [
                                                Text('See more'),
                                                Icon(Icons.arrow_forward),
                                              ],
                                            ),
                                            style: ElevatedButton.styleFrom(
                                              foregroundColor:
                                                  const Color(0xFF04bdff),
                                              backgroundColor: Colors.white,
                                              shape: RoundedRectangleBorder(
                                                borderRadius:
                                                    BorderRadius.circular(4),
                                              ),
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ),
                                  Expanded(
                                    child: Container(
                                      color: const Color(0xFF0397cc),
                                      child: Center(
                                        child: SvgPicture.asset(
                                          'assets/img/mail-img-placeholder.svg',
                                          height: 100,
                                        ),
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                              // Bottom Section
                              Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  _buildMailCard(),
                                  _buildMailCard(),
                                  _buildMailCard(),
                                ],
                              ),
                            ],
                          ),
                        ),
                      ],
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
    required String icon,
    required String text,
    String? count,
    bool selected = false,
  }) {
    return Container(
      color: selected ? const Color(0xFFfce8e7) : Colors.transparent,
      child: ListTile(
        leading: SvgPicture.asset(icon, height: 24),
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
