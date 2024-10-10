package com.example.demo.services;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.regex.Pattern;

import javax.management.RuntimeErrorException;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.VerticalAlignment;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.demo.entity.RequestNewUniversity;
import com.example.demo.entity.RequestUniversityOBJ;
import com.example.demo.entity.University;
import com.example.demo.repository.UniversityRepository;

import jakarta.validation.Valid;

@Service
public class UniversityServiceImplementation implements universityService {

	@Autowired
	UniversityRepository urepo;

	@Override
	public List<University> getAlluniversities() {
		// TODO Auto-generated method stub
		return urepo.findAll();
	}

	@Override
	public List<String> getAllUniversitiesAdresses() {

		return urepo.getAllUniversitiesAdresses();
	}

	@Override
	public University createUniversity(@Valid University university) {
		validateUniversity(university);

		System.err.println(university);
		if (university.getUid() != null && urepo.existsById(university.getUid())) {
			return urepo.save(university);
			// throw new IllegalArgumentException("University ID already exist.....");
		}

		return urepo.save(university);
	}

	@Override
	public void deleteUniversity(Integer uid) {
		urepo.deleteById(uid);

	}

	@Override
	public List<University> getAllUniversitiesByCriteria(RequestUniversityOBJ req) {
		if (req.getUid() != null && req.getUid() == 0) {
			req.setUid(null);
		}
		if (req.getUaddress() != null && req.getUaddress().isEmpty()) {
			req.setUaddress(null);
		}

		return urepo.getAllUniversitiesByCriteria(req.getUid(), req.getUaddress(), req.getStartTime(),
				req.getEndTime());
	}

	@Override
	public Page<University> getAllUniversitiesByCriteriaWithPagination(RequestUniversityOBJ req, int page,
			int pageSize) {
		PageRequest pageRequest = PageRequest.of(page, pageSize);
		if (req.getUid() != null && req.getUid() == 0) {
			req.setUid(null);
		}
		if (req.getUaddress() != null && req.getUaddress().isEmpty()) {
			req.setUaddress(null);
		}

		return urepo.getAllUniversitiesByCriteriaWithPagination(req.getUid(), req.getUaddress(), req.getStartTime(),
				req.getEndTime(), pageRequest);
	}

	@Override
	public Page<University> searchInWithPagination(String searchTerm, int page, int pageSize) {
		PageRequest pageRequest = PageRequest.of(page, pageSize);

		return urepo.searchInWithPagination(searchTerm, pageRequest);
	}

	@Override
	public Page<University> searchInColumnsWithPagination(String uname, String uaddress, String email,
			String phonenumber, int page, int pageSize) {
		PageRequest pageRequest = PageRequest.of(page, pageSize);

		return urepo.searchInColumnsWithPagination(uname, uaddress, email, phonenumber, pageRequest);
	}

	@Override
	public ByteArrayInputStream generateExcel(RequestUniversityOBJ req) {
		if (req.getUid() != null && req.getUid() == 0)
			req.setUid(null);
		if (req.getUaddress() != null && req.getUaddress() == "")
			req.setUaddress(null);
		List<University> data = urepo.getAllUniversitiesByCriteria(req.getUid(), req.getUaddress(), req.getStartTime(),
				req.getEndTime());
		if (data.isEmpty()) {
			System.out.println("No data found for the provided filters.");
		} else {
			System.out.println("Data retrieved: " + data.size() + " records.");
		}
		String[] column = { "UID", "Uname", "City", "Email ID", "Phone number", "Last updated on" };

		try (Workbook workbook = new XSSFWorkbook(); ByteArrayOutputStream out = new ByteArrayOutputStream()) {
			Sheet sheet = workbook.createSheet("Data");

			Font headerFont = workbook.createFont();
			headerFont.setBold(true);
			headerFont.setFontHeightInPoints((short) 15);

			CellStyle headerCellStyle = workbook.createCellStyle();
			headerCellStyle.setFont(headerFont);
			headerCellStyle.setAlignment(HorizontalAlignment.CENTER);
			headerCellStyle.setVerticalAlignment(VerticalAlignment.CENTER);

			Font dataFont = workbook.createFont();
			dataFont.setFontHeightInPoints((short) 12);
			CellStyle dataCellStyle = workbook.createCellStyle();
			dataCellStyle.setFont(dataFont);

			dataCellStyle.setAlignment(HorizontalAlignment.CENTER);
			dataCellStyle.setVerticalAlignment(VerticalAlignment.CENTER);

			sheet.addMergedRegion(new CellRangeAddress(0, 1, 0, 1));
			sheet.addMergedRegion(new CellRangeAddress(0, 1, 2, 3));
			sheet.addMergedRegion(new CellRangeAddress(0, 1, 4, 4));
			Row headerRow = sheet.createRow(2);

			sheet.addMergedRegion(new CellRangeAddress(2, 3, 0, 0));
			sheet.addMergedRegion(new CellRangeAddress(2, 3, 1, 1));
			sheet.addMergedRegion(new CellRangeAddress(2, 3, 2, 2));
			sheet.addMergedRegion(new CellRangeAddress(2, 3, 3, 3));
			sheet.addMergedRegion(new CellRangeAddress(2, 3, 4, 4));
			sheet.addMergedRegion(new CellRangeAddress(2, 3, 5, 5));
			sheet.addMergedRegion(new CellRangeAddress(2, 3, 6, 6));
			sheet.addMergedRegion(new CellRangeAddress(2, 3, 7, 7));

			sheet.setColumnWidth(0, 10 * 256);
			sheet.setColumnWidth(1, 50 * 256);
			sheet.setColumnWidth(2, 30 * 256);
			sheet.setColumnWidth(3, 20 * 256);
			sheet.setColumnWidth(4, 20 * 256);
			sheet.setColumnWidth(5, 20 * 256);
			sheet.setColumnWidth(6, 15 * 256);
			sheet.setColumnWidth(7, 25 * 256);

			for (int i = 0; i < column.length; i++) {
				Cell cell = headerRow.createCell(i);
				cell.setCellValue(column[i]);
				cell.setCellStyle(headerCellStyle);
			}
			int rowNum = 4;
			for (University item : data) {
				Row row = sheet.createRow(rowNum++);
				row.createCell(0).setCellValue(item.getUid());
				row.createCell(1).setCellValue(item.getUname());
				row.createCell(2).setCellValue(item.getUaddress());
				row.createCell(3).setCellValue(item.getEmail());
				row.createCell(4).setCellValue(item.getPhonenumber());

				row.createCell(5).setCellValue(formatToIST(item.getLastUpdatedOn()));
				for (Cell cell : row) {
					cell.setCellStyle(dataCellStyle);
				}
			}

			workbook.write(out);
			return new ByteArrayInputStream(out.toByteArray());

		} catch (IOException e) {
			e.printStackTrace();
			throw new RuntimeException("Error occurred while generating Excel file", e);
		}
	}

	public String formatToIST(LocalDateTime dateTime) {
		ZonedDateTime istTime = dateTime.atZone(ZoneId.systemDefault()).withZoneSameInstant(ZoneId.of("Asia/Kolkata"));
		return DateTimeFormatter.ofPattern("dd-MMM-yyyy HH:mm:ss").format(istTime);
	}

	private static final String NAME_REGEX = "^[A-Za-z ]+$";
	private static final String ADDRESS_REGEX = "^[A-Za-z0-9,\\- ]+$";
	private static final String EMAIL_REGEX = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$";
	private static final String PHONE_REGEX = "^[0-9]{10}$";
	private static final String TYPE_REGEX = "^[A-Za-z ]+$";

	public void validateUniversity(University university) {
		if (isBlank(university.getUname()) || !Pattern.matches(NAME_REGEX, university.getUname())) {
			throw new IllegalArgumentException("Invalid university name");
		}
		if (isBlank(university.getUaddress()) || !Pattern.matches(ADDRESS_REGEX, university.getUaddress())) {
			throw new IllegalArgumentException("Invalid university address");
		}
		if (isBlank(university.getEmail()) || !Pattern.matches(EMAIL_REGEX, university.getEmail())) {
			throw new IllegalArgumentException("Invalid email address");
		}
		if (isBlank(university.getPhonenumber()) || !Pattern.matches(PHONE_REGEX, university.getPhonenumber())) {
			throw new IllegalArgumentException("Invalid phone number");
		}

	}

	private boolean isBlank(String value) {
		return value == null || value.trim().isEmpty();
	}

	@Override
	public Page<University> searchWithEachAndEveryColumn(RequestNewUniversity req, int page, int pageSize) {
		if (req.getUid() != null && req.getUid() == 0)
			req.setUid(null);
		
		if (req.getCid() != null && req.getCid() == 0)
			req.setCid(null);
		
		if (req.getUname() != null && req.getUname() == "")
			req.setUname(null);
		if (req.getUaddress() != null && req.getUaddress() == "")
			req.setUaddress(null);
		
		if (req.getCaddress() != null && req.getCaddress() == "")
			req.setCaddress(null);

		if (req.getNameFilter() != null && req.getNameFilter().equals(""))
			req.setNameFilter(null);
		if (req.getAddressfilter() != null && req.getAddressfilter().equals(""))
			req.setAddressfilter(null);

		if (req.getPhoneFilter() != null && req.getPhoneFilter().equals(""))
			req.setPhoneFilter(null);
		if (req.getEmailFilter() != null && req.getEmailFilter().equals(""))
			req.setEmailFilter(null);

		if (req.getLastUpdatedFilter() != null && req.getLastUpdatedFilter().equals(""))
			req.setLastUpdatedFilter(null);

		System.out.println(req);
		PageRequest pageRequest = PageRequest.of(page, pageSize);
		return urepo.searchWithEachAndEveryColumn(req.getUid(), req.getUname(), req.getUaddress(), req.getStartTime(),
				req.getEndTime(), req.getNameFilter(), req.getAddressfilter(), req.getEmailFilter(),
				req.getPhoneFilter(), req.getLastUpdatedFilter(), pageRequest);
	}

}
