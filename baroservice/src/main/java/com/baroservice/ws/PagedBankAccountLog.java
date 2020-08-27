
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>PagedBankAccountLog complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType name="PagedBankAccountLog"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="CurrentPage" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="CountPerPage" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="MaxIndex" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="MaxPageNum" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="BankAccountLogList" type="{http://ws.baroservice.com/}ArrayOfBankAccountLog" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "PagedBankAccountLog", propOrder = {
    "currentPage",
    "countPerPage",
    "maxIndex",
    "maxPageNum",
    "bankAccountLogList"
})
public class PagedBankAccountLog {

    @XmlElement(name = "CurrentPage")
    protected int currentPage;
    @XmlElement(name = "CountPerPage")
    protected int countPerPage;
    @XmlElement(name = "MaxIndex")
    protected int maxIndex;
    @XmlElement(name = "MaxPageNum")
    protected int maxPageNum;
    @XmlElement(name = "BankAccountLogList")
    protected ArrayOfBankAccountLog bankAccountLogList;

    /**
     * currentPage �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getCurrentPage() {
        return currentPage;
    }

    /**
     * currentPage �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setCurrentPage(int value) {
        this.currentPage = value;
    }

    /**
     * countPerPage �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getCountPerPage() {
        return countPerPage;
    }

    /**
     * countPerPage �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setCountPerPage(int value) {
        this.countPerPage = value;
    }

    /**
     * maxIndex �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getMaxIndex() {
        return maxIndex;
    }

    /**
     * maxIndex �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setMaxIndex(int value) {
        this.maxIndex = value;
    }

    /**
     * maxPageNum �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getMaxPageNum() {
        return maxPageNum;
    }

    /**
     * maxPageNum �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setMaxPageNum(int value) {
        this.maxPageNum = value;
    }

    /**
     * bankAccountLogList �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfBankAccountLog }
     *     
     */
    public ArrayOfBankAccountLog getBankAccountLogList() {
        return bankAccountLogList;
    }

    /**
     * bankAccountLogList �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfBankAccountLog }
     *     
     */
    public void setBankAccountLogList(ArrayOfBankAccountLog value) {
        this.bankAccountLogList = value;
    }

}
