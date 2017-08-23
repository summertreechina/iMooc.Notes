# coding:utf8
from bs4 import BeautifulSoup
import re
import urlparse

class HtmlParser(object):
	"""docstring for HtmlParser"""
	# def __init__(self, arg):
	# 	super(HtmlParser, self).__init__()
	# 	self.arg = arg

	def _get_new_urls(self, page_url, soup):
		new_urls = set()
		# /uploadfile/201708/21/7522714504.jpg
		# links = soup.find_all('a', href=re.compile(r'/uploadfile/\d/\d/\d.jpg'))
		links = soup.find_all('a', href=re.compile(r'/Rosimeimei/Rosimeimei\d+\.html'))
		for link in links:
			new_url = link['href']
			new_full_url = urlparse.urljoin(page_url, new_url)
			new_urls.add(new_full_url)
		return new_urls

	def _get_new_data(self, page_url, soup):
		res_data = {}
		title_node = soup.find('a', 'weiwancheng')
		res_data['title'] = title_node.get_text()

		summary_node = soup.find()
		......

	def parse(self, page_url, html_cont):
		if page_url is None or html_cont is None:
			return

		soup = BeautifulSoup(html_cont, 'html_parser', from_encoding='utf-8')
		new_urls = self._get_new_urls(page_url, soup)
		new_data = self._get_new_data(page_url, soup)
		return new_urls, new_data



































